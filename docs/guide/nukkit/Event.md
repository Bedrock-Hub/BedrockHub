# Events API

### Your first event listener
+ Create `listener` or `event` folder(package), create TestListener class in it

com/myname/myplugin/listener/TestListener.java
```java
package com.myname.myplugin.listener;

import cn.nukkit.event.EventHandler;
import cn.nukkit.event.Listener;
import cn.nukkit.event.player.PlayerJumpEvent;

public class TestListener implements Listener {
    @EventHandler //annotation for event handlers
    public void onJump(PlayerJumpEvent event) { //method can have any name you want
        event.getPlayer().sendMessage("Kto ne scahet - tot moskal");
    }
}
```
You can use [PowerNukkitX event list](https://www.powernukkitx.com/doc/en-us/dev/res/event_list.html) to found events

### Register your event listener
Register your event listner by writing `this.getServer().getPluginManager().registerEvents(new TestListener(), this);` in `onEnable()`
```java
package com.myname.myplugin;

import cn.nukkit.plugin.PluginBase;
import cn.nukkit.plugin.PluginLogger;
import com.myname.myplugin.listener.TestListener;

public class MyPlugin extends PluginBase {
    PluginLogger log = new PluginLogger(this);

    @Override
    public void onEnable() {
        this.getServer().getPluginManager().registerEvents(new TestListener(), this);
        log.info("Plugin was successfully enabled!");
    } 

    @Override
    public void onLoad() {
        log.info("Plugin is loading...");
    }
}
```