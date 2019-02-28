function openDocuments(droppedItems) {
  for (var item of droppedItems) {
    app = Application.currentApplication();
    app.includeStandardAdditions = true;

    var command = "cat '" + item.toString() + "' ";      // filename, quoted in case it has space
    command += "| sed 's/.*[^0-9].*/\"&\"/g' ";          // quote any line that has at least one non-number
    command += "| tr '\r' '\n' ";                        // translate any DOS line endings into unix
    command += "| paste -s -d , - ";                     // put everything one line, separated by comma's
    command += "> '" + item.toString() + "-joined.txt'"; // write all to original filename, suffixed w/ "-joined.txt"

    app.doShellScript(command);
  }
}
