import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message and app container', () => {
    page.navigateTo();
    expect(page.getElementTextFindById('title')).toEqual('Welcome to embedded-angular!');
    expect(page.isElementDisplayedFindById('appContainer')).toEqual(true);
  });

  it('should toggle remove button', () => {
    page.navigateTo();
    expect(page.isElementEnabledFindById('removeButton')).toEqual(true);
    expect(page.getElementTextFindById('toggleStatus')).toContain('enabled');
    page.clickElementById('toggleRemoveButton');
    expect(page.isElementEnabledFindById('removeButton')).toEqual(false);
    expect(page.getElementTextFindById('toggleStatus')).toContain('disabled');
    page.clickElementById('toggleRemoveButton');
    expect(page.isElementEnabledFindById('removeButton')).toEqual(true);
    expect(page.getElementTextFindById('toggleStatus')).toContain('enabled');
  });

  it('should show clickMe text', () => {
    page.navigateTo();
    expect(page.getElementTextFindById('htmlEventData')).toEqual('');
    page.clickElementById('clickMe');
    expect(page.getElementTextFindById('htmlEventData')).toContain('from clickMe');
  });

  it('should show the text component', () => {
    page.navigateTo();
    expect(page.getElementTextFindById('logComponent')).toContain('Events log');
  });
});
