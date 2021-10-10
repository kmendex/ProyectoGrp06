import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

export class TODO {
  $key: string;
  title: string;
  description: string;
}
export interface Video {
  title: string;
  url: string;
  thumb: string;
  subtitle: string;
}
@Injectable({
  providedIn: 'root'
})

export class CrudService {
  private videos: Video[] = [
    {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      subtitle: "By Blender Foundation",
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      title: "Big Buck Bunny"
    },
    {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      subtitle: "By Blender Foundation",
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      title: "Elephant Dream"
    }
  ];
  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }
  public getVidoes(): Video[] {
    return this.videos;
  }

  create(todo: TODO) {
    return this.ngFirestore.collection('pacientes').add(todo);
  }

  getTasks() {
    return this.ngFirestore.collection('pacientes').snapshotChanges();
  }
  
  getTask(id) {
    return this.ngFirestore.collection('pacientes').doc(id).valueChanges();
  }

  update(id, todo: TODO) {
    //return this.ngFirestore.collection('pacientes').doc(id).update(todo);
    this.ngFirestore.collection('pacientes').doc(id).update(todo)
      .then(() => {
        this.router.navigate(['/pacientes']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('pacientes/' + id).delete();
  }

  // ----------------------------------------------------------------

  getTasksActivitys(name) {
    return this.ngFirestore.collection('actividades', ref => ref.where('name', '==', name)).snapshotChanges();

  }
  
  getTasksActivity(id) {
    return this.ngFirestore.collection('actividades').doc(id).valueChanges();
  }



}
