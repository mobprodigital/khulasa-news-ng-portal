import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent implements OnInit {
  public topGainer: string = 'nifty';
  public topLoser: string = 'nifty';
  public topGainerNifty: string[][] = [
    ["Indiabulls Hsg", "619.15", "21.10", "3.53"],
    [" JSW Steel", "267.30", "5.70", "2.18"],
    ["Tata Steel", "489.65", "	8.95", "1.86"],
    ["Vedanta", "154.85", "2.70", "1.77"],
    ["BPCL", "339.90", "6.30", "1.89"]
  ];
  public topGainerSensex: string[][] = [
    ["Vedanta", "156.90", "4.80", "3.16"],
    ["Tata Steel", " 495.25", "5.70", "2.18"],
    [" Coal India", "221.80", "	18.95", "1.86"],
    ["Yes Bank", "174.85", "2.70", "1.77"],
    [" M & M", "	652.95", "6.30", "1.89"]
  ];
  public topLoserNifty: string[][] = [
    ["HPCL", "226.80", " -7.25", "-3.10"],
    ["BPCL", "330.40", "-8.90", "-2.62"],
    ["Zee Entertain", "403.70", "-11.00", "-2.65"],
    ["Eicher Motors", "693.00", "-444.50", "-2.10"],
    ["Bharti Infratel", "306.25", "-6.60", " -2.11"]
  ];
  public topLoserSensex: string[][] = [
    ["Infosys", "226.80", " -5.25", "-3.10"],
    ["HCL", "330.40", "-8.90", "-2.62"],
    ["TCS", "403.70", "-7.00", "-2.65"],
    ["Hero Motocorp2", "693.00", "-345.50", "-2.10"],
    ["Bajaj Auto2", "306.25", "-6.60", " -2.11"]
  ];
  public loser: string[][] = [
    ['Company','Price','Change','%Loss']
  ]
  public gainer: string[][] = [
    ['Company','Price','Change','%Gain']
  ]
 


  constructor() {

  }

  ngOnInit() {
  }

}
