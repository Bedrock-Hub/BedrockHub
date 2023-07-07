# Commands API

### CommandPermissonLevel
|Enum|char value|
|:--|:--|
|Any|0|
|GameMasters|1|
|Admin|2|
|HostPlayer|3|
|Console|4|
|Internal|5|

### CommandFlagValue
|Enum|unsigned short|
|:--|:--|
|None|0x00|
|Usage|0x01|
|Visibility2|0x02|
|Visibility4|0x04|
|Visibility6|0x06|
|Visibility8|0x08|
|Sync|0x10|
|Execute|0x20|
|Type|0x40|
|Cheat|0x80|
|Async|0x100|

### Dynamic commands

```cpp
DynamicCommand::setup("hello", "Hello world command", {}, {}, { {}, }, [](DynamicCommand const& command, CommandOrigin const& origin, CommandOutput& output, std::unordered_map<std::string, DynamicCommand::Result>& results) {
  // Do something
  output.success("Hello world!"); // Command successfyl output
}, CommandPermissionLevel::Any);
```

### Command by class

```cpp
class HelloWorldCommand : public Command {

public:
  void execute(CommandOrigin const& ori, CommandOutput& output) const override {
    // Do something
    output.success("Hello world!"); // Command successfyl output
  }

  static void setup(CommandRegistry* registry) {
    registry->registerCommand(
      "hello",               // Name
      "Hello world command", // Description
      CommandPermissionLevel::Any,
      {(CommandFlagValue)0},
      {(CommandFlagValue)0x80}
    );
    registry->registerOverload<HelloWorldCommand>("hello"); // Name
  }
};
void RegisterCommands() {
  Event::RegCmdEvent::subscribe([](Event::RegCmdEvent event) {
    HelloWorldCommand::setup(event.mCommandRegistry); // Setup command by class
    return true;
  });
}
```