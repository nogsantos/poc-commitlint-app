import { html, fixture, expect } from '@open-wc/testing';

import '../src/nogsantos-commitlint-test-app';

describe('<nogsantos-commitlint-test-app>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<nogsantos-commitlint-test-app></nogsantos-commitlint-test-app>');
    expect(el.title).to.equal('open-wc');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <nogsantos-commitlint-test-app title="different"></nogsantos-commitlint-test-app>
    `);
    expect(el.title).to.equal('different');
  });
});
