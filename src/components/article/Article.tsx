/* eslint-disable react/no-unescaped-entities */
import './Article.css';
import { classNames } from '../../utils/Utils';
import { useEffect, forwardRef } from 'react';

interface ArticleProps {
  side?: 'left' | 'right',
  inView: boolean,
}

export type Ref = HTMLDivElement;

const Article = forwardRef<Ref, ArticleProps>(function Article(props, ref) {
  const { side = 'left', inView = false } = props;

  useEffect(() => {
    console.log(inView)
  })

  return (
    <div ref={ref} className={classNames('period-wrapper', side, inView ? 'visible' : '')}>
      <header className="period-header">
        <h2 className="period-header_title">1930</h2>
      </header>
      <button className="period-button">Slide</button>
      <div className="period-body">
        Ethical fanny pack squid street art 90's. Taiyaki artisan truffaut, kale chips plaid tonx
        heirloom shaman photo booth sartorial iPhone shabby chic hella irony woke. Typewriter
        whatever knausgaard twee bodega boys shoreditch. Fam ramps gluten-free, readymade trust fund
        VHS marfa. Kogi edison bulb kickstarter etsy 3 wolf moon, pour-over chartreuse sustainable
        tote bag single-origin coffee bushwick tumeric forage hoodie paleo. Fanny pack banjo man bun
        occupy authentic keytar migas skateboard letterpress church-key craft beer activated
        charcoal. Migas vinyl affogato disrupt slow-carb tonx kickstarter, polaroid irony. Banjo
        venmo everyday carry health goth kogi pitchfork mustache tumblr. Occupy yuccie plaid
        helvetica, listicle JOMO cronut unicorn air plant next level. Photo booth flannel four
        dollar toast lo-fi 3 wolf moon subway tile banjo stumptown raclette fam vegan bitters.
        Shoreditch fixie kogi, hella vexillologist aesthetic pop-up fit pitchfork tote bag hammock.
        Pabst yes plz letterpress vice authentic. Adaptogen activated charcoal stumptown
        williamsburg everyday carry. Hexagon pour-over air plant, leggings swag tilde meditation
        vape keffiyeh thundercats live-edge palo santo mlkshk. Polaroid organic cliche sriracha
        flannel, marfa gatekeep vexillologist ascot asymmetrical street art XOXO taiyaki. Yes plz
        flannel banjo yr locavore gastropub 3 wolf moon messenger bag 90's. Iceland green juice chia
        chicharrones enamel pin, pour-over ethical. Shoreditch art party twee fanny pack pug woke
        poutine offal hammock pour-over. Direct trade synth etsy bodega boys kombucha lyft
        typewriter, cold-pressed VHS authentic photo booth hot chicken. Humblebrag dreamcatcher
        live-edge gochujang skateboard cloud bread yes plz hexagon freegan small batch praxis etsy.
        Hot chicken 90's selvage typewriter. Green juice enamel pin church-key hell of twee jianbing
        stumptown sartorial, food truck adaptogen gastropub. Intelligentsia hoodie austin irony
        tumeric gochujang. Bushwick tumblr fam readymade chia gochujang, prism godard fit schlitz
        tattooed paleo vape praxis locavore. Dummy text? More like dummy thicc text, amirite?
      </div>
    </div>
  );
});

export default Article;
