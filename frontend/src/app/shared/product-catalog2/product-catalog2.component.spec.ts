import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalog2Component } from './product-catalog2.component';

describe('ProductCatalog2Component', () => {
  let component: ProductCatalog2Component;
  let fixture: ComponentFixture<ProductCatalog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCatalog2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatalog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
