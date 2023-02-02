import { Component, OnInit } from '@angular/core';

import * as joint from 'jointjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  namespace = joint.shapes
  private paper?: joint.dia.Paper
  private graph?: joint.dia.Graph

  ngOnInit(): void {
    const namespace = joint.shapes;

    this.graph = new joint.dia.Graph(
      {},
      { cellNamespace: this.namespace }
    );

    let paperOptions: joint.dia.Paper.Options = {}
    paperOptions.el = document.getElementById('jointjs-holder')!
    paperOptions.model = this.graph
    paperOptions.width = 1000
    paperOptions.height = 1000
    paperOptions.gridSize = 10
    paperOptions.drawGrid = false
    paperOptions.cellViewNamespace = namespace

    this.paper = new joint.dia.Paper(paperOptions)

    var note = new Note

    var rect = new joint.shapes.standard.Rectangle(
      {
        position: {
          x: note.X,
          y: note.Y
        },
        size: { width: note.Width, height: note.Heigth },
        methods: [],
      }
    )

    rect.attr({
      body: {
        fill: '#fe976a',
        "stroke-width": 0.5,
      },
      text: {
        text: note.Body
      }
    })

    rect.addTo(this.graph!);
  }
}

class Note {
  Body: string = "Hello World"
  X: number = 50
  Y: number = 50
  Width: number = 100
  Heigth: number = 100
}
