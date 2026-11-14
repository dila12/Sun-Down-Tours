import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../../i18n/t.pipe';
import {
  bestImageSrc,
  buildCappedAvifSrcSet,
  buildCappedSrcSet,
  onImageError,
} from '../../../../utils/image.util';

interface FleetVehicle {
  src: string;
  titleKey: string;
  altKey: string;
  typeKey: string;
}

@Component({
  selector: 'app-home-vehicles-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './home-vehicles-section.html',
  styleUrls: ['./home-vehicles-section.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeVehiclesSectionComponent {
  readonly onImageError = onImageError;
  readonly bestImageSrc = bestImageSrc;
  readonly buildCappedSrcSet = buildCappedSrcSet;
  readonly buildCappedAvifSrcSet = buildCappedAvifSrcSet;
  readonly vehicleSizes =
    '(max-width: 575px) 100vw, (max-width: 991px) 50vw, 280px';

  readonly fleet: FleetVehicle[] = [
    {
      src: 'assets/img/vehicles/suv-grey-sigiriya.webp',
      titleKey: 'home.vehicles.suvGrey',
      altKey: 'home.vehicles.suvGreyAlt',
      typeKey: 'home.vehicles.typeSuv',
    },
    {
      src: 'assets/img/vehicles/suv-red-vezel.webp',
      titleKey: 'home.vehicles.suvRed',
      altKey: 'home.vehicles.suvRedAlt',
      typeKey: 'home.vehicles.typeSuv',
    },
    {
      src: 'assets/img/vehicles/kdh-white.webp',
      titleKey: 'home.vehicles.kdhWhite',
      altKey: 'home.vehicles.kdhWhiteAlt',
      typeKey: 'home.vehicles.typeKdh',
    },
    {
      src: 'assets/img/vehicles/kdh-silver.webp',
      titleKey: 'home.vehicles.kdhSilver',
      altKey: 'home.vehicles.kdhSilverAlt',
      typeKey: 'home.vehicles.typeKdh',
    },
  ];
}
