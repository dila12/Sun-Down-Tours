import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import toursData from '../../databaseJson/tours.json';
import { PackageItemComponent } from '../../sharedComponents/package-item-component/package-item-component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from '../../sharedComponents/contact-us-component/contact-us-component';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../Services/country.service';
import tourdetails from '../../../assets/data/tourdetails.json';


@Component({
  selector: 'app-home-page-component',
  standalone: true,
  imports: [
    CommonModule,
    PackageItemComponent,
    RouterModule,
    ContactUsComponent,
  ],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.css',
})
export class HomePageComponent {
  homecontact = true;
  dayTours: any[] = [];
  multiDayTours: any[] = [];
  currentIndex = 0;
  interval: any;

  activeTab: 'multi' | 'day' = 'multi';


  constructor(
    private http: HttpClient,
    private countryService: CountryService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  async ngOnInit() {
    const multiPriceMap = new Map(
      tourdetails.multiDayTours.map((tour: any) => [
        tour.name,
        tour.price?.['2'] ?? 0
      ])
    );

    const dayPriceMap = new Map(
      tourdetails.dayTours.map((tour: any) => [
        tour.name,
        tour.price?.['2'] ?? 0
      ])
    );
    this.dayTours = toursData.dayTours.map((tour: any) => ({
      ...tour,
      price: dayPriceMap.get(tour.filecode) ?? 0
    }));

    this.multiDayTours = toursData.multiDayTours.map((tour: any) => ({
      ...tour,
      price: multiPriceMap.get(tour.filecode) ?? 0
    }));
    return;

  }

  setTab(tab: 'multi' | 'day') {
    this.activeTab = tab;
  }


  goTo(index: number) {
    this.currentIndex = index;
  }


  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
