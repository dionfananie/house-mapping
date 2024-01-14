import * as css from "./View.styles";
function House() {
  const houseList = new Array(12).fill(Math.random());
  const listBottom = Array.from({ length: 6 }, (_, i) => 6 - i);
  const listBottom2 = Array.from({ length: 6 }, (_, i) => 12 - i * 2);
  const listBottom3 = Array.from({ length: 6 }, (_, i) => 11 - i * 2);

  return (
    <div css={css.layoutMapping}>
      <div>
        {houseList.map((_, idx) => {
          return <div css={css.itemHouse}>D3/{idx + 1}</div>;
        })}
      </div>
      <div>
        <div css={css.bottomLayout}>
          {listBottom3.map(item => {
            return <div css={css.itemHouse}>D5/{item}</div>;
          })}
        </div>
        <div css={[css.bottomLayout, css.mb16]}>
          {listBottom2.map(item => {
            return <div css={css.itemHouse}>D5/{item}</div>;
          })}
        </div>
        <div css={css.bottomLayout}>
          {listBottom.map(item => {
            return <div css={css.itemHouse}>D4/{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default House;
