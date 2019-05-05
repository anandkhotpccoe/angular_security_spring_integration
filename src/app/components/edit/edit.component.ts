import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category/category.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  title = "Edit Category";
  updateCatForm: FormGroup;
  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }
  createForm() {
    this.updateCatForm = this.fb.group({
      id: [""],
      name: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.service.editCategory(this.route.snapshot.params.id).subscribe(res => {
      if (res.status === 1) {
        this.updateCatForm.reset();
        this.updateCatForm.patchValue({ ...res.body });
      }
    });
  }

  updateCategory() {
    this.service.addCategory(this.updateCatForm.value).subscribe(res => {
      if (res.status === 1) {
        this.updateCatForm.reset();
        this.router.navigate(["/dashboard"]);
      }
    });
  }
}
