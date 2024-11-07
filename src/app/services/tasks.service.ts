import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class TasksService {
	private localStorageKey = 'tasks'

	getTasks(): string[] {
		return (
			JSON.parse(localStorage.getItem(this.localStorageKey) as string) || []
		)
	}

	addTask(task: string): void {
		const tasks: string[] = this.getTasks()
		tasks.push(task)
		localStorage.setItem(this.localStorageKey, JSON.stringify(tasks))
	}

	removeTask(index: number): void {
		const tasks: string[] = this.getTasks()
		tasks.splice(index, 1)
		localStorage.setItem(this.localStorageKey, JSON.stringify(tasks))
	}
}
