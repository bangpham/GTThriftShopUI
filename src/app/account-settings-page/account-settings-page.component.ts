import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {Params, Router, ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AccountService} from "../../services/account.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-account-settings-page',
  templateUrl: './account-settings-page.component.html',
  styleUrls: ['./account-settings-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AccountSettingsPageComponent implements OnInit{
  private  testUser : User;
  private  test : string;

  private currentUser : User;
  private blockedList : User[];
  private nameList : string[]

  private blockTableData : tableData[] = [];
  private displayedColumns = ['position', 'name', 'status'];
//  private dataSource;
  private dataSource = new MatTableDataSource()
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.accountService.getCurrentUser().subscribe((value => {
      this.currentUser = value;
      this.blockedList = this.currentUser.blockedUsers;
      this.testUser = this.blockedList[0];
      this.test = this.blockedList[0].toString();


      for (let i = 0; i < this.blockedList.length; i++) {
        let user = this.blockedList[i];
        const bang: tableData = {
          position: i,
          name: user.firstName.concat(' ', user.lastName),
          unblock: ''
        };
        this.blockTableData.push(bang);

      }
      this.dataSource = new MatTableDataSource(this.blockTableData);
    }));


  }

  private applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface tableData {
  position: number;
  name: string;
  unblock: string;
}


