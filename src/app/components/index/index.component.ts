import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category/category.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  categories: any[];
  constructor(private service: CategoryService) {}

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.service.getCategory().subscribe(res => {
      if (res.status === 1) this.categories = res.body;
    });
  }

  deleteCategory(id) {
    this.service.deleteCategory(id).subscribe(res => {
      if (res.status === 1) this.getCategories();
    });
  }
}
