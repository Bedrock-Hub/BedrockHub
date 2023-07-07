# Hooks API

### How to find hook symbols
+ Install LiteLoaderBDS and VanillaBDS
+ Run `PeEditor.exe -s`

```cmd
PeEditor.exe -s
```
You now see a new file in which you can find some hook symbols and demangled data, you can also demangle them yourself using [Online Demangler](http://demangler.com)
+ `bedrock_server_symbol_list.txt`

### Difference between hooks
+ `THook` - Hooks static functions and cannot contact non-static functions.
+ `TInstanceHook` - Hooks non-static functions and can contact non-static and static functions

### How to use hook
+ Symbol `?isTrustedSkin@SerializedSkin@@QEBA_NXZ`
+ Demangled data `bool SerializedSkin::isTrustedSkin(void) const`

Function returns `bool` and first argument returns ptr of object(`SerializedSkin`)

```cpp
THook(value-type, "symbol", args) {
  return value;
}
```

Edited the hook with the data obtained and return force true, to make all players skin's trusted!

```cpp
THook(bool, "?isTrustedSkin@SerializedSkin@@QEBA_NXZ", SerializedSkin* skin) {
  return true;
}
```