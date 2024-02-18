import Xarrow, { xarrowPropsType } from 'react-xarrows';

export type LineTreeProps = xarrowPropsType

const LineTree = (props: LineTreeProps) => {
  const { color = '#ffff00', end, start } = props;

  return (
    <div>
      <Xarrow
        animateDrawing
        showHead={false}
        color={color}
        startAnchor="bottom"
        endAnchor="top"
        start={start}
        end={end}
      />
    </div>
  )
};

export default LineTree;
