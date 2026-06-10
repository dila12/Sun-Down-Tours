import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import toursData from '../../databaseJson/tours.json';
import { PackageItemComponent } from '../../sharedComponents/package-item-component/package-item-component';
import { HttpClient } from '@angular/common/http';
import tourdetails from '../../../assets/data/tourdetails.json';

@Component({
  selector: 'app-tour-packages',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule,PackageItemComponent],
  templateUrl: './tour-packages.html',
  styleUrl: './tour-packages.css'
})
export class TourPackages {
  dayTours: any[] = [];
  multiDayTours: any[] = [];

  activeTab: 'multi' | 'day' = 'multi';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

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
}
