import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import Group from "src/app/models/group.model";
import { GroupStoreService } from "src/app/services/store/group-store.service";
import { BaseComponent } from "../base-component.ts/base-component";

@Component({
  selector: 'add-group-popup',
  templateUrl: './add-group-popup.html',
  styleUrls: ['./add-group-popup.css'],
})
export class AddGroupPopup extends BaseComponent implements OnInit {
  @Input() createButtonPressed: Observable<null>;
  public popup: boolean = false;
  public groupName: string = '';
  public groupNotes: string = '';

  constructor(
    private groupStoreService: GroupStoreService,
  ) {
    super();
  }
  ngOnInit(): void {
    this.logger.trace(AddGroupPopup.name, 'ngOnInit', 'was called');

    this.createButtonPressed.subscribe(() => {
      this.logger.trace(AddGroupPopup.name, 'createButtonPressed', 'was called');
      this.popup = true;
    });
  }

  public groupNameChanged(event: any) {
    if (!event || !event.target) return;
    this.groupName = event.target.value || '';
  }

  public groupNotesChanged(event: any) {
    if (!event || !event.target) return;
    this.groupNotes = event.target.value || '';
  }

  public createGroup() {
    this.logger.trace(AddGroupPopup.name, 'createGroup', 'was called');
    this.logger.debug(AddGroupPopup.name, 'createGroup', 'groupName:', this.groupName);
    if(!this.validateGroupName() || !this.validateGroupNotes()) {
      this.displayError('Please enter a value for name and notes.');
      return;
    }
    this.groupStoreService.addGroup(new Group(
      0,
      1, // TODO get budget id
      this.groupName,
      true,
      new Date(),
      this.groupNotes,
    ));
    this.resetForm();
    this.popup = false;
  }

  private resetForm() {
    this.groupName = '';
    this.groupNotes = '';
  }
  private validateGroupName(): boolean {
    return this.groupName.length > 0;
  }

  private validateGroupNotes(): boolean {
    return this.groupNotes.length > 0;
  }

  private displayError(message: string) {
    this.logger.debug(AddGroupPopup.name, 'displayError', message);
    // TODO display error
  }

}