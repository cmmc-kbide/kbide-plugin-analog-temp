Blockly.JavaScript["ky_013_analog_temp_block"] = function(block) {
    var text_ky_013_analog_temp_pin = block.getFieldValue(
      "KY_013_ANALOG_TEMP_PIN"
    );
    var variable_ky_013_analog_temp_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_013_ANALOG_TEMP_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
	int KY_013_ANALOG_TEMP_PIN = ${text_ky_013_analog_temp_pin};
	int Vo;
	float R1 = 10000; // value of R1 on board
	float logR2, R2, T;
	float c1 = 0.001129148, c2 = 0.000234125, c3 = 0.0000000876741; //steinhart-hart coeficients for thermistor
	#END

	
	  Vo = analogRead(KY_013_ANALOG_TEMP_PIN);
	  R2 = R1 * (1023.0 / (float)Vo - 1.0); //calculate resistance on thermistor
	  logR2 = log(R2);
	  T = (1.0 / (c1 + c2*logR2 + c3*logR2*logR2*logR2)); // temperature in Kelvin
	  T = T - 273.15; //convert Kelvin to Celcius
	 // T = (T * 9.0)/ 5.0 + 32.0; //convert Celcius to Farenheit

	  ${variable_ky_013_analog_temp_value} = T;

	  delay(500);
	
    `;
    return code;
  };