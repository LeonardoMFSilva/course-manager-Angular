import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS',
                duration: 120,
                rating: 8,
                releaseDate: '04/Março/21'
            },
            {
                id: 2,
                name: 'Angular: Core',
                imageUrl: '',
                price: 99.99,
                code: 'XPT',
                duration: 90,
                rating: 8.5,
                releaseDate: '04/Março/21'
            }
        ]
    }

}