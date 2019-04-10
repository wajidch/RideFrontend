import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from "@angular/material";
import { FormControl } from "@angular/forms";
import { ElementRef } from "@angular/core";
import { Observable } from "rxjs";



export class FunctionService {

  private files: File[];

  constructor(files: File[]) {
    this.files = files;
  }

  // #############################################
  // CHOOSE FILE
  // #############################################
  onChange(event: any, input: any) {
    let filesList = [].slice.call(event.target.files);
    filesList.forEach(element => {
      this.files.push(element);
    });
  }

  onChangeWithFileList(event: any, input: any, files:File[]) {
    let filesList = [].slice.call(event.target.files);
    filesList.forEach(element => {
      files.push(element);
    });
  }

  // #############################################
  // CHIPS
  // #############################################
  add(event: MatChipInputEvent, matAutocomplete: MatAutocomplete, myList: Object[], allObj: Object[], myControl: FormControl, tag: string): void {
    // Add messagiaire only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      console.log("EVENT");
      console.log(event);
      if ((value || '').trim()) {
        var inter = myList.filter(o => o[tag] == value.trim())[0];
        if (inter == null || inter[tag] == null || inter[tag] == '') {
          inter = value;
        }

        myList.push(inter);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      myControl.setValue(null);
    }
  }
  remove(elm: Object, myList: Object[]): void {
    const index = myList.indexOf(elm);

    if (index >= 0) {
      myList.splice(index, 1);
    }

  }




  selected(event: MatAutocompleteSelectedEvent, myList: Object[], myControl: FormControl, myInput: ElementRef): void {
    console.log("@@@@ SELCETD EVENT");
    console.log(event);
    myList.push(event.option.value);
    myInput.nativeElement.value = '';
    myControl.setValue(null);
  }


  filter(value: any, allList: any[], tag: string): any[] {
    console.log("##FiltredValue");
    console.log(value);
    var filterValue;
    if((typeof value) == "string")
      filterValue = value.toLowerCase();
    else
      filterValue = String(value[tag]).toLowerCase();
    
    var res =  allList.filter(mElem => mElem[tag].toLowerCase().includes(filterValue));
    console.log("##RES");
    console.log(res);
    return res;
  }


  filterValue(value: string, allList: any[]): any[] {
    console.log("##FiltredValue STRING");
    console.log(value);
    var filterValue = value.toLowerCase();
    var res =  allList.filter(mElem => mElem.toLowerCase().indexOf(filterValue)==0);
    console.log("##RES SRTRING");
    console.log(res);
    return res;
  }

}