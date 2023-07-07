# Nukkit Basics

### Your first plugin
+ Create Java project in your Code Editor
+ Go to your `pom.xml` file if you are using Maven, or `build.gradle` if you are using Gradle  

Dependency for Maven
```xml
<!-- for NukkitX -->
<dependencies>
    <dependency>
        <groupId>cn.nukkit</groupId>
        <artifactId>nukkit</artifactId>
        <version>1.0-SNAPSHOT</version>
    </dependency>
</dependencies>

<!-- for PowerNukkitX -->
<dependencies>
    <dependency>
        <groupId>cn.powernukkitx</groupId>
        <artifactId>powernukkitx</artifactId>
        <version>1.20.0-r2</version>
    </dependency>
</dependencies>
```

Dependency for Gradle
```groovy
// For NukkitX
repositories {
    mavenCentral()
}

dependencies {
    compile group: 'cn.nukkit', name: 'nukkit', version: '1.0-SNAPSHOT'
}

// For PowerNukkitX
repositories {
    mavenCentral()
}

dependencies {
    compile group: 'cn.powernukkitx', name: 'powernukkitx', version: '1.20.0-r2'
}
```

+ Go to resources folder and create plugin.yml  

plugin.yml
```yml
name: My plugin
main: com.myname.myplugin.MyPlugin # Path to your plugin Main class
version: 1.0.0
api: ["1.0.14"] # Nukkit API value
```

+ Create Main class

com/myname/myplugin/MyPlugin.java
```java
package com.myname.myplugin;

import cn.nukkit.plugin.PluginBase;
import cn.nukkit.plugin.PluginLogger;

public class MyPlugin extends PluginBase {
    PluginLogger log = new PluginLogger(this);

    @Override
    public void onEnable() {
        log.info("Plugin was successfully enabled!");
    } // Executes code when plugin was enabled

    @Override
    public void onLoad() {
        log.info("Plugin is loading...");
    } // Executes code while plugin is loading
}
```

+ Now you can build your Plugin using `mvn package` for Maven or `gradlew build` for Gradle  
Put it into your Server plugins folder and try to run it. Success! This is your first Nukkit plugin.