import {
	Component,
	inject,
	OnInit,
	AfterViewInit,
	ViewChild,
	ElementRef,
	Renderer2
} from '@angular/core'
import { TasksService } from './services/tasks.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
	@ViewChild('input') input!: ElementRef

	newTask: string = ''
	tasks: string[] = []

	private _taskService = inject(TasksService)
	private _renderer2 = inject(Renderer2)

	ngOnInit(): void {
		this.getTasks()
	}

	ngAfterViewInit(): void {
		this.setFocusInput()
	}

	setFocusInput(): void {
		this._renderer2.selectRootElement(this.input.nativeElement).focus()
	}

	getTasks(): void {
		this.tasks = this._taskService.getTasks()
	}

	addTask(): void {
		if (this.newTask.trim() != '') {
			this._taskService.addTask(this.newTask)
			this.newTask = ''
			this.getTasks()
			this.setFocusInput()
		}
	}

	removeTask(index: number): void {
		this._taskService.removeTask(index)
		this.getTasks()
	}
}
