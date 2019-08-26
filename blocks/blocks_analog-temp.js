Blockly.Blocks["ky_013_analog_temp_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-013 ANALOG TEMP");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("A0"), "KY_013_ANALOG_TEMP_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_013_ANALOG_TEMP_VALUE"),
          "KY_013_ANALOG_TEMP_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };