import LeaderLine from 'leader-line-new';
import { useEffect, useRef } from 'react';

export interface LineTreeProps {
  start: any;
  end: any;
}

const LineTree = (props: LineTreeProps) => {
  const { start, end } = props;
  const line: any = useRef();

  useEffect(() => {
    const drawLine = () => {
      new LeaderLine(start.current, LeaderLine.pointAnchor(end.current, { x: '10%', y: '100%' }), { path: 'grid', startSocket: 'left', endSocket: 'top', color: 'black', size: 2});
    };

    const timer = setInterval(() => {
      if (start.current) {
        clearInterval(timer);
        drawLine();
      }
    }, 5);

    return () => {
      timer && clearInterval(timer);
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (line.current && end?.current) {
        line.current.position();
      }
    }, 0);
  });

  return null;
};

export default LineTree;
