import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ExistingSettingsModel, NewSettingsModel} from '../../Models';
import {FormControl} from '@angular/forms';
import { TdFileService, IUploadOptions } from '@covalent/core';

class BaseComponent {
  validators = [this.isEmail];
  errorMessages = {
    'mustbeEmail': 'Please enter valid email addresses'
  };

  isEmail(control: FormControl) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(control.value)) {
      return {
        'mustbeEmail': true
      };
    }
    return null;
  };
}
;


@Component({
  selector: 'existing-exceptions',
  templateUrl: './existing-exceptions.component.html',
  styleUrls: ['../exception.component.css']
})
export class ExistingExceptionsComponent {
  @Input() exceptionsList: any;
  @Input() currentSettings: any;
  @Input() noSettingsExist: boolean;
  @Output() onSelect = new EventEmitter<any>();
  selectedPolicyName: string;
  validators: any;
  errorMessages: any;

  constructor() {
  };


  selectDepartment = (departmentName: string) => {
    this.selectedPolicyName = departmentName;
    this.onSelect.emit(departmentName);
  }

  isCurrentPolicy = (selectedPolicy: string) => {
    let isCurrentPolicy = false;
    if (selectedPolicy === this.currentSettings.PolicyName) {
      isCurrentPolicy = true;
    } else {
      isCurrentPolicy = false;
    }
    return isCurrentPolicy;
  }
}
;

@Component({
  selector: 'exception-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../exception.component.css'],
  providers: [ TdFileService ]

})
export class ExceptionSettingsComponent extends BaseComponent {

  mainPolicyExceptionsSettings: any;

  @Input() settings: ExistingSettingsModel;
  @Output() onSave = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  fileSelectMsg = 'No file selected yet.';
  fileUploadMsg = 'No file uploaded yet.';

  constructor(private fileUploadService: TdFileService) {
    super();
  };
  // ref: http://stackoverflow.com/a/1293163/2343
  // This will parse a delimited string into an array of
  // arrays. The default delimiter is the comma, but this
  // can be overriden in the second argument.
   CSVToArray( strData, strDelimiter ){
  // Check to see if the delimiter is defined. If not,
  // then default to comma.
  strDelimiter = (strDelimiter || ",");

  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
    (
      // Delimiters.
      "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

      // Quoted fields.
      "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

      // Standard fields.
      "([^\"\\" + strDelimiter + "\\r\\n]*))"
    ),
    "gi"
  );


  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;


  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while (arrMatches = objPattern.exec( strData )){

    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[ 1 ];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (
      strMatchedDelimiter.length &&
      strMatchedDelimiter !== strDelimiter
    ){

      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push( [] );

    }

    var strMatchedValue;

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[ 2 ]){

      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[ 2 ].replace(
        new RegExp( "\"\"", "g" ),
        "\""
      );

    } else {

      // We found a non-quoted value.
      strMatchedValue = arrMatches[ 3 ];

    }


    // Now that we have our value string, let's add
    // it to the data array.
    arrData[ arrData.length - 1 ].push( strMatchedValue );
  }
  console.log(arrData)

  // Return the parsed data.
  return( arrData );
}

  uploadMultipleEvent(file: File): void {
    console.log(file);
    console.log('inside upload');
    console.log(this.fileUploadService);
    this.CSVToArray(file.name, ',');
    this.fileUploadMsg = file.name;
  }
  selectMultipleEvent(event){
    console.log('inside multiple event');
    console.log(event);
  }

  deletePolicy = (policy: any) => {
    this.onDelete.emit(policy);
  }
  saveSettings = (settings: any) => {
    const users = settings.Exceptions;
    console.log(settings);
    const extractedUsers = [];
    users.forEach((user) => {
      if (user !== null && typeof user === 'object') {
        extractedUsers.push(user.value);
      } else {
        extractedUsers.push(user);
      }
    });
    settings.Exceptions = extractedUsers;
    this.onSave.emit(settings);
  }

}
;

@Component({
  selector: 'new-exception',
  templateUrl: './new-exception.html',
  styleUrls: ['../exception.component.css']
})

export class NewExceptionComponent extends BaseComponent {
  settings: any = {'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}, 'SpecialAttachments': {}};
  @Output() onCancel = new EventEmitter<any>();
  @Output() onSave = new EventEmitter<NewSettingsModel>();

  constructor() {
    super();
    this.settings.AttachementsProcessedLevels.Documents = 2;
    this.settings.AttachementsProcessedLevels.Images = 2;
    this.settings.AttachementsProcessedLevels.Presentations = 2;
    this.settings.AttachementsProcessedLevels.Spreadsheets = 2;
    this.settings.AttachementsWithoutCdr['Unrecognized Files'] = 0;
    this.settings.AttachementsWithoutCdr['Video/Sound'] = 0;
    this.settings.AttachementsWithoutCdr['Applications/Scripts'] = 0;
    this.settings.SpecialAttachments['Password Protected'] = 0;
  };

  cancelCreation = (cancel: boolean) => {
    this.onCancel.emit(cancel);
  }
  saveSettings = (newSettings: any) => {
    const users = newSettings.Exceptions;
    const extractedUsers = [];
    users.forEach((user) => {
      extractedUsers.push(user.value);
    });
    delete newSettings.Exceptions;
    newSettings.Exceptions = extractedUsers;
    this.onSave.emit(newSettings);
  }
}


