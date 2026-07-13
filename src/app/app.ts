import { Component } from '@angular/core';

@Component({
  selector : 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',

})

export class App
{
  profile ={
    name: 'Mohit Srivastava',
    photo:'/profile.jpg',
    slackId: '@msrivastava',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohit-srivastava-ms1802/' },
      { label: 'GitHub (Personal)', url: 'https://github.com/Mohit-Srivastava-Official' },
      { label: 'GitHub (Company)', url: 'https://github.com/Mohit-Srivastava-Official-Grid-Dynamics' },
      { label: 'LeetCode', url: 'https://leetcode.com/u/Mohit_Srivastava_official/' },
      { label: 'Resume (Off-campus)', url: 'https://drive.google.com/file/d/1nMY1PKF7I-Cut3qj36reRw_xOUjDZvNC/view?usp=sharing' },
      { label: 'Resume (Grid)', url: 'https://drive.google.com/file/d/18QrsCHaZ0iYmIOYOwKbfT2CSjAuS7ccX/view' },
    ],



  };
}
