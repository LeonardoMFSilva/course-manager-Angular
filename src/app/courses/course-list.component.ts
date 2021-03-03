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
                imageUrl: '/assets/imgs/forms.png',
                price: 99.99,
                code: 'XPS',
                duration: 120,
                rating: 4.5,
                releaseDate: '04/Março/21'
            },
            {
                id: 2,
                name: 'Angular: Http',
                imageUrl: '/assets/imgs/http.png',
                price: 99.99,
                code: 'XPT',
                duration: 90,
                rating: 5,
                releaseDate: '04/Março/21'
            }
        ]
    }

}