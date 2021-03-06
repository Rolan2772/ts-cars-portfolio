import {PortfolioItemView} from "./PortfolioItemView";

import {CAR_ENTITY, IMAGE_ENTITY, PORTFOLIO_ENTITY, PRICING_ENTITY} from "../../entity/TestData";

test('construct from entity', () => {
    const view = new PortfolioItemView(PORTFOLIO_ENTITY);

    expect(view.id).toEqual(PORTFOLIO_ENTITY.id);
    expect(view.model).toEqual(CAR_ENTITY.model);
    expect(view.fuelType).toEqual(CAR_ENTITY.fuelType);
    expect(view.gearingType).toEqual(CAR_ENTITY.gearingType);
    expect(view.version).toEqual(CAR_ENTITY.version);
    expect(view.imageSrc).toEqual(IMAGE_ENTITY.src);
    expect(view.imageTitle).toEqual(IMAGE_ENTITY.title);
    expect(view.price).toEqual(PRICING_ENTITY.price);
});
