# Getting started

### First of all
+ Install Visual Studio 2019-2022 (recomended) with MSVC
+ You can use Visual Studio Code or other IDE and use gcc or llvm but it's more harder

### Simple way to create a project
+ fork or download [PluginTemplate-CPP](https://github.com/LiteLDev/PluginTemplate-CPP)
+ open folder in your IDE
+ Run `update_sdk.cmd` to update SDK and header files
+ Run `prepare_libraries.cmd` to create .lib files if cmd file doesn't work open terminal(cmd or other) in `SDK\tools` directory and run `PeEditor.exe -c -l -o ../lib`
+ Open folder with your Bedrock Dedicated Server for Windows and select `bedrock_server.pdb` file
+ Now you have all required libs in `sdk\lib` directory
+ Now you can create your first plugin

### Better way (i think) to create a project
Maybe i write it

### Welcome to LiteLoaderBDS
Now you can enter to `src` directory and see some files

+ `dllmain.cpp` - just runner for your DLL don't touch it
+ `plugin.cpp` - The main file of your plugin
+ `version.h` - Contain all credentials about your plugin

You can edit `version.h` file to change plugin name, author name and version<br>
Now you can compile it and run with LiteLoaderBDS and see your first `Hello, world!`