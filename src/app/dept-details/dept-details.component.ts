import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent implements OnInit {
  public deptid:number;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
   // this.deptid=parseInt(this.route.snapshot.paramMap.get('id'));

    // with paramMap Observable 
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.deptid=parseInt(params.get('id'));
    })
  }
  goPrevious()
  {
    let preId=this.deptid-1;
    this.router.navigate(['/department',preId]);
  }
  goNext()
  {
    let nextId=this.deptid+1;
    this.router.navigate(['/department',nextId]);
  }
  goBack()
  {
    let selectedId=this.deptid ?this.deptid:null;
    this.router.navigate(['/departments',{id:selectedId}]);

    // code for relative path
    //this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
  }
}
