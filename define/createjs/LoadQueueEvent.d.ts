module createjs {

	export class LoadQueueEvent {
		item:any;
		result:any;
		progress:number;
		error:string;
	}

	export class LoadQueueItem {
		src:string;
		tag:HTMLElement;
	}
}