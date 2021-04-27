import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  empArr:any[] = [
    {
      "id": 1,
      "name": "Joaquin Luis M. David",
      "gender": "Male",
      "email": "davidwackin@gmail.com",
      "emp_status":"EMPLOYED",
      "salary":"$2500"
    },
    {
      "id": 2,
      "name": "Markhin Dave Escoto",
      "gender": "Male",
      "email": "daveescoto@gmail.com",
      "emp_status":"PROVISIONAL",
      "salary":"$700"
    },
    {
      "id": 3,
      "name": "Ron Andajer",
      "gender": "Male",
      "email": "andajjeron@gmail.com",
      "emp_status":"EMPLOYED",
      "salary":"$1,000"
    },
    {
      "id": 4,
      "name": "Enliven Guiao",
      "gender": "Male",
      "email": "tayagenliven@gmail.com",
      "emp_status":"PROVISIONAL",
      "salary":"$500"
    },
    {
      "id": 5,
      "name": "Rick M. Blakemore",
      "gender": "Male",
      "email": "RickMBlakemore@dayrep.com",
      "emp_status":"EMPLOYED",
      "salary":"$1,000"
    },
    {
      "id": 6,
      "name": "Alen	Montgomery",
      "gender": "Male",
      "email": "a.montgomery@randatmail.com",
      "emp_status":"PROVISIONAL",
      "salary":"$900"
    },
    {
      "id": 7,
      "name": "Carl	Baker",
      "gender": "Male",
      "email": "c.baker@randatmail.com	",
      "emp_status":"EMPLOYED",
      "salary":"$1,200"
    },
    {
      "id": 8,
      "name": "Ned	Hamilton",
      "gender": "Male",
      "email": "n.hamilton@randatmail.com",
      "emp_status":"PROVISIONAL",
      "salary":"$800"
    },
    {
      "id": 9,
      "name": "Florrie	Cameron",
      "gender": "Female",
      "email": "f.cameron@randatmail.com",
      "emp_status":"EMPLOYED",
      "salary":"$1,200"
    },
    {
      "id": 10,
      "name": "Lucas	Richards",
      "gender": "Male",
      "email": "l.richards@randatmail.com	",
      "emp_status":"PROVISIONAL",
      "salary":"$900"
    },
    {
      "id": 11,
      "name": "Wilson	Perkins",
      "gender": "Male",
      "email": "w.perkins@randatmail.com	",
      "emp_status":"EMPLOYED",
      "salary":"$1,500"
    },
    {
      "id": 12,
      "name": "Melissa	Robinson",
      "gender": "Female",
      "email": "m.robinson@randatmail.com",
      "emp_status":"PROVISIONAL",
      "salary":"$1,000"
    },
    {
      "id": 13,
      "name": "Johan Sundstein",
      "gender": "Male",
      "email": "bigdaddyn0ta1l@gmail.com",
      "emp_status":"EMPLOYED",
      "salary":"$1,000"
    },
    {
      "id": 14,
      "name": "Stuart	Phillips",
      "gender": "Male",
      "email": "s.phillips@randatmail.com",
      "emp_status":"PROVISIONAL",
      "salary":"$1,000"
    },
    {
      "id": 15,
      "name": "Bruce	Mason",
      "gender": "Male",
      "email": "b.mason@randatmail.com",
      "emp_status":"EMPLOYED",
      "salary":"$1,200"
    },
  ];
  trackByData(index:number, empArr:any):number
  {
    return empArr.id;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
