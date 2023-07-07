# Packet API

### Binary Stream Object API
##### Create binary stream

```cpp
BinaryStream bs;
```

##### Write to binary stream
There you can get information what's needed to write in your packet! [Protocol Documentation](https://github.com/NiclasOlofsson/MiNET/blob/master/src/MiNET/MiNET/Net/MCPE%20Protocol%20Documentation.md) & [Bedrock Protocol](https://wiki.vg/Bedrock_Protocol)

```cpp
bs.writeXXXXX(value);
```

|Available functions|Parameter Type|
|:--|:--|
|writeType|`CommandOriginData`|
|writeType|`std::vector<std::unique_ptr<class DataItem>>`|
|writeType|`NetworkItemStackDescriptor`|
|writeType|`MoveActorAbsoluteData`|
|writeType|`mce::UUID`|
|writeType|`NetworkItemInstanceDescriptor`|
|writeType|`ItemStackRequestSlotInfo`|
|writeType|`RecipeIngredient`|
|writeType|`Vec3`|
|writeCompoundTag|`CompoundTag`|
|writeBool|`bool`|
|writeByte|`unsigned char`|
|writeDouble|`double`|
|writeFloat|`float`|
|writeSignedBigEndianInt|`int`|
|writeSignedInt|`int`|
|writeSignedInt64|`__int64`|
|writeSignedShort|`short`|
|writeString|`string`|
|writeUnignedChar|`unsigned char`|
|writeUnignedInt|`unsigned int`|
|writeUnignedInt64|`unsigned __int64`|
|writeUnignedShort|`unsigned short`|
|writeUnignedVarInt|`unsigned int`|
|writeUnignedVarInt64|`unsigned __int64`|
|writeVarInt|`int`|
|writeVarInt64|`__int64`|

##### Building packet from binary stream

```cpp
std::shared_ptr<Packet> packet = MinecraftPackets::createPacket(MinecraftPacketIds::Text); // Create TextPacket
packet->read(bs); // Parse binary stream
```

##### Sending packet
To specific player

```cpp
player->sendNetworkPacket(*packet);
```

To all players
```cpp
Global<Level>->sendPacketForAllPlayers(*packet);
```

### Demo Code
Simple implementation of Text Packet

```cpp
BinaryStream bs; // Create binary stream
bs.writeUnsignedChar(0); // Text type
bs.writeBool(false); // Needs translation
bs.writeString(""); // Source name
bs.writeString("Hello world!"); // Message
bs.writeString(""); // XUID
bs.writeString(""); // Platform chat id
std::shared_ptr<Packet> packet = MinecraftPackets::createPacket(MinecraftPacketIds::Text); // Create packet
packet->read(bs); // Parse binary stream
player->sendNetworkPacket(*packet); // Send packet to specific player
```