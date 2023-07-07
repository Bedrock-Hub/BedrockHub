# Custom Item API

::: warning
`PowerNukkitX ONLY`
:::

### Create new custom item

|Item category type|
|:--|
|`CONSTRUCTOR`|
|`EQUIPMENT`|
|`ITEMS`|
|`NATURE`|
|`NONE`|

Create new java class CustomItem.java

```java
package com.myname.myplugin;

import cn.nukkit.item.customitem.CustomItemDefinition;
import cn.nukkit.item.customitem.ItemCustom;
import cn.nukkit.item.customitem.data.ItemCreativeCategory;

public class CustomItem extends ItemCustom {
  public CustomItem() {
    super("id:name", "name", "texture"); // Initialize item with id, name, texture
  }
  public CustomItemDefinition getDefinition() {
    return CustomItemDefinition.simpleBuilder(this, ItemCreativeCategory.ITEMS).build(); // Set custom item category
  }
}
```

### Register custom item
Register your new custom item by writing `Item.registerCustomItem(CustomItem.class);` in `onLoad()` function

```java
package com.myname.myplugin; 
 
import cn.nukkit.plugin.PluginBase; 
import cn.nukkit.plugin.PluginLogger; 
 
public class MyPlugin extends PluginBase { 
    PluginLogger log = new PluginLogger(this); 
 
    @Override 
    public void onEnable() { 
        log.info("Plugin was successfully enabled!");
    }
 
    @Override 
    public void onLoad() { 
        log.info("Plugin is loading..."); 
        Item.registerCustomItem(CustomItem.class); // Register new item
    }
}
```