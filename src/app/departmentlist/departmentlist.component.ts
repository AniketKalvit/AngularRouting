import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  public deptList=[
    {id:1, name:'Angular'},
    {id:2, name:'React Js'},
    {id:3, name:'Javascript'},
    {id:4, name:'Node'},
  ]
  constructor(private router:Router,private route:ActivatedRoute) { }
  public selectedId:number;
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=parseInt(params.get('id'));
    })
  }
  onSelect(dept)
  {
    this.router.navigate(['/department',dept.id]);
    // code for relative path  
    //this.router.navigate([dept.id],{relativeTo:this.route});
  }

  isSelected(dept)
  {
    // check that value & data type is same or not
    return dept.id===this.selectedId;
  }
}
