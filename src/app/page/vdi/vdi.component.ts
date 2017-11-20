import { Component } from '@angular/core';
import { vdi } from './vdiClass';
import { Company, Category, User } from '../../models/reseauvdiModels.model';
import { Datastore } from '../../services/datastore.service';

@Component({
  selector: 'app-vdi',
  templateUrl: './vdi.component.html',
  styleUrls: ['./vdi.component.css']
})
export class VDIComponent {
  // users = [{"first_name":"Josie","last_name":"Syphas","email":"jsyphas0@zimbio.com","phone":"2259080468","address":"477 Logan Junction","society":"Lazz","type":"basique"},
  // {"first_name":"Theodor","last_name":"Sworne","email":"tsworne1@webmd.com","phone":"4155041870","address":"6 Derek Center","society":"Jabbertype","type":"premium"},
  // {"first_name":"Justino","last_name":"Dunham","email":"jdunham2@devhub.com","phone":"8892213663","address":"5086 Manitowish Center","society":"Innojam","type":"premium"},
  // {"first_name":"Florri","last_name":"Caurah","email":"fcaurah3@hp.com","phone":"3021491143","address":"01 Kinsman Park","society":"Thoughtsphere","type":"premium"},
  // {"first_name":"Terrijo","last_name":"Hursey","email":"thursey4@oakley.com","phone":"6501766190","address":"041 Evergreen Drive","society":"Photobean","type":"basique"},
  // {"first_name":"Amabel","last_name":"Dowdam","email":"adowdam5@sciencedaily.com","phone":"8862434319","address":"6 Morningstar Pass","society":"Twinder","type":"premium"},
  // {"first_name":"Shelden","last_name":"Facey","email":"sfacey6@vimeo.com","phone":"2754775260","address":"98044 3rd Crossing","society":"Fadeo","type":"premium"},
  // {"first_name":"Chere","last_name":"Wheelton","email":"cwheelton7@tiny.cc","phone":"6465022606","address":"14 Chive Street","society":"Wordpedia","type":"premium"},
  // {"first_name":"Beverie","last_name":"Kauscher","email":"bkauscher8@dropbox.com","phone":"4674923388","address":"62674 Dennis Hill","society":"Janyx","type":"premium"},
  // {"first_name":"Marsh","last_name":"Sannes","email":"msannes9@usatoday.com","phone":"9287748503","address":"09 Hansons Parkway","society":"Zooxo","type":"basique"}];

  users: User[];
  companies: Company[];

  // societies = [{name: "À la Claire Fontaine", editing: false}, {name: "Secrets de Miel", editing: false}, {name: "Allande-Tanais", editing: false}, {name: "Aromasun - Elixir d'Essences", editing: false}];

  newvdi = new vdi();
  fakechange = [];
  showAddVdi: boolean = true;

  constructor(private datastore: Datastore){}
  ngOnInit() {
    this.datastore.findAll(User, { include: 'companies'}).subscribe(
      data => {
        console.log(data);
        this.users = data.getModels();
      });
    this.datastore.findAll(Company, { include: 'category'}).subscribe(
      data => {
        console.log(data);
        this.companies = data.getModels();
      });
    console.log(this.newvdi);
  }

  updateVdi(user, choice) {
    if (choice == 'y')
    {
      user.first_name = this.fakechange[0];
      user.last_name = this.fakechange[1];
      user.address = this.fakechange[2];
      user.phone = this.fakechange[3];
      user.email = this.fakechange[4];
      user.society = this.fakechange[5];
      user.type = this.fakechange[6];
    }
    this.fakechange[0] = user.first_name;
    this.fakechange[1] = user.last_name;
    this.fakechange[2] = user.address;
    this.fakechange[3] = user.phone;
    this.fakechange[4] = user.email;
    this.fakechange[5] = user.society;
    this.fakechange[6] = user.type;
    console.log(this.fakechange);
    user.edit = !user.edit;
  }

  removeSoc(test) {
    this.datastore.deleteRecord(User, test.id).subscribe(data=>console.log(data));
      this.users.splice(this.users.findIndex(x => x.email == test.email), 1);
  }

  addvdi(newvdi) {
    this.showAddVdi = !this.showAddVdi;
    if (newvdi.first_name != '' && newvdi.last_name != '' && newvdi.address != '' && newvdi.phone != '' && newvdi.email != '' && newvdi.society != '' && newvdi.type != '')
    {
      let user = this.datastore.createRecord(User, {
        first_name: newvdi.first_name,
        last_name: newvdi.last_name,
        address: newvdi.address,
        phone: newvdi.phone,
        company: newvdi.company,
        type: newvdi.type,
      })
      user.save().subscribe(data=>console.log(data));
      this.users.push(newvdi);
    }
    this.newvdi = new vdi();
  }
}
