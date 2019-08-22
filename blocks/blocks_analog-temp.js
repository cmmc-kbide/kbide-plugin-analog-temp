Blockly.Blocks['ky_013_analog_temp_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-013 ANALOG TEMP");
    this.appendValueInput("KY_013_ANALOG_TEMP_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};