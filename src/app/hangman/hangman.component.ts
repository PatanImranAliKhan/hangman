import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {

  public title = "HangMan";
  public a1: String = null;
  public a2: String = null;
  public a3: String = null;
  public a4: String = null;
  public con1 = false;
  public con2 = false;
  public con3 = false;
  public con4 = false;
  public i = 0;
  public count = 0;
  public go = 'GAMEOVER';
  public gm = '';
  public disable = false;
  public win = false;
  public lose = false;
  public er;
  public characters =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
   'y', 'z'];
   public random: String='';
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<4;i++)
    {
      const a = Math.floor((Math.random() * 26) + 1);
      this.random = this.random+this.characters[a];
    }
  }

  clicked(char)
  {
    if (this.i === 0 && this.count < 8)
    {
      if (this.random.charAt(this.i) === char)
      {
        this.a1 = char;
        this.con1 = true;
        this.i++;
      }
      else
      {
        this.gm = this.gm + this.go.charAt(this.count);
        this.er = char.charCodeAt(0);
        this.er = this.er - this.random.charCodeAt(this.i);
        this.er = this.er / 5;
        this.count++;
        alert('Hint : Different between the two number divided by 5 :    ' + this.er);
      }
    }
    else if (this.i === 1 && this.count < 8)
    {
      if (this.random.charAt(this.i) === char)
      {
        this.a2 = char;
        this.con2 = true;
        this.i++;
      }
      else
      {
        this.gm = this.gm + this.go.charAt(this.count);
        this.count++;
        this.er = char.charCodeAt(0);
        this.er = this.er - this.random.charCodeAt(this.i);
        this.er = this.er / 5;
        alert('Hint : Different between the two number divided by 5 :    ' + this.er);
      }
    }
    else if (this.i === 2 && this.count < 8)
    {
      if (this.random.charAt(this.i) === char)
      {
        this.a3 = char;
        this.con3 = true;
        this.i++;
      }
      else
      {
        this.gm = this.gm + this.go.charAt(this.count);
        this.count++;
        this.er = char.charCodeAt(0);
        this.er = this.er - this.random.charCodeAt(this.i);
        this.er = this.er / 5;
        alert('Hint : Different between the two number divided by 5 :    ' + this.er);
      }
    }
    else if (this.i === 3 && this.count < 8)
    {
      if (this.random.charAt(this.i) === char)
      {
        this.a4 = char;
        this.con4 = true;
        this.i++;
        if (this.gm !== 'GAMEOVER' )
        {
          this.win = true;
          this.disable = true;
        }
      }
      else
      {
        this.gm = this.gm + this.go.charAt(this.count);
        this.count++;
        this.er = char.charCodeAt(0);
        this.er = this.er - this.random.charCodeAt(this.i);
        this.er = this.er / 5;
        alert('Hint : Different between the two number divided by 5 :   ' + this.er);
      }
    }
    else
    {
      this.disable = true;
    }
    if (this.gm === 'GAMEOVER')
    {
      this.disable = true;
    }
    if (this.count === 8)
    {
      this.lose = true;
    }
  }

}

