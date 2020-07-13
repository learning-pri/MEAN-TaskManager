import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // constructor() { }
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients : string[];
  Projects: string[];
  Years: number[]= [];
  TeamMembersSummary= [];
  TeamMembers= [];

  ngOnInit(): void {
    this.Designation="Team Leader";
    this.Username="Priyank Shukla";
    this.NoOfTeamMembers=52;
    this.TotalCostOfAllProjects=180;
    this.PendingTasks=15;
    this.UpComingProjects=2;
    this.ProjectCost=3500500;
    this.CurrentExpenditure=92678;
    this.AvailableFunds=42350;

    this.Clients = [
      "Specsavers Pvt Ltd", "Norvich Union- AVIVA", "Ticketmaster"
    ]
    this.Projects=[
      "Project A", "Project B", "Project C", "Project D"
    ]

    for(var i=2019; i>=2010; i--){
      this.Years.push(i);
    }

    this.Years= [
      2013, 2014, 2015, 2016, 2017
    ]

    this.TeamMembersSummary = [
      {Region: "East", TeamMembersCount: 12, TemporarilyUnavailableMembers: 4},
      {Region: "West", TeamMembersCount: 23, TemporarilyUnavailableMembers: 6},
      {Region: "North", TeamMembersCount: 18, TemporarilyUnavailableMembers: 8},
      {Region: "South", TeamMembersCount: 8, TemporarilyUnavailableMembers: 5}
    ]

    this.TeamMembers = [
      {Region:"East", Members: [
        {ID:1, Name: "Amit", Status:"Available"},
        {ID:2, Name: "Saurabh", Status:"Available"},
        {ID:3, Name: "John", Status:"Buzy"},
        {ID:4, Name: "Alex", Status:"Buzy"},
      ]},  
      {Region:"North", Members: [
        {ID:1, Name: "Amit", Status:"Available"},
        {ID:2, Name: "Saurabh", Status:"Available"},
        {ID:3, Name: "John", Status:"Buzy"},
        {ID:4, Name: "Alex", Status:"Buzy"},
      ]},
      {Region:"West", Members: [
        {ID:1, Name: "Amit", Status:"Available"},
        {ID:2, Name: "Saurabh", Status:"Available"},
        {ID:3, Name: "John", Status:"Buzy"},
        {ID:4, Name: "Alex", Status:"Buzy"},
      ]},
      {Region:"South", Members: [
        {ID:1, Name: "Amit", Status:"Available"},
        {ID:2, Name: "Saurabh", Status:"Available"},
        {ID:3, Name: "John", Status:"Buzy"},
        {ID:4, Name: "Alex", Status:"Buzy"},
      ]},
    ]
  }



}
