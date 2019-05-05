import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CategoryService } from "../../services/category/category.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  title = "Add Category";
  catForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: CategoryService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.catForm = this.fb.group({
      name: ["", Validators.required]
    });
  }
  addCategory() {
    this.service.addCategory(this.catForm.value).subscribe(res => {
      if (res.status === 1) {
        this.catForm.reset();
        this.router.navigate(["/dashboard"]);
      }
    });
  }

  ngOnInit() {}
}
