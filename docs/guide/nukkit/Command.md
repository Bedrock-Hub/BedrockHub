# Commands API

### Your first command
In our first tutorial we created your first plugin. Now it's time for your first command.
+ Create `command` folder(package), create TestCommand class in it

com/myname/myplugin/command/TestCommand.java
```java
package com.myname.myplugin.command;

import cn.nukkit.command.Command;
import cn.nukkit.command.CommandSender;

public class TestCommand extends Command {
    public TestCommand(String name) {
        super("Test", "Your first command");
    } // First argument is your command name, second one is your command descriptiom

    @Override
    public boolean execute(CommandSender sender, String commandLabel, String[] args) {
        sender.sendMessage("WoW! It works!");
        return true; // true if everything is right, false if there was some mistakes in command syntax
    }
}
```

### Register your command
Register your command by writing this code in `onEnable()`  
```java
this.getServer().getCommandMap().registerAll("MyPlugin", Arrays.asList(new TestCommand() /*Your command class*/));
```

Now your main file will look like this
```java
package com.myname.myplugin;

import cn.nukkit.plugin.PluginBase;
import cn.nukkit.plugin.PluginLogger;
import com.myname.myplugin.command.TestCommand;

public class MyPlugin extends PluginBase {
    PluginLogger log = new PluginLogger(this);

    @Override
    public void onEnable() {
        this.getServer().getCommandMap().registerAll("MyPlugin", Arrays.asList(new TestCommand()));
        log.info("Plugin was successfully enabled!");
    } 

    @Override
    public void onLoad() {
        log.info("Plugin is loading...");
    }
}
```