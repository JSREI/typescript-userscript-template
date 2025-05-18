import { Metric } from 'web-vitals';

// 定义ReportHandler类型，因为在web-vitals 5.0中不再直接导出这个类型
type ReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFCP(onPerfEntry);
      onINP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    }).catch(err => {
      console.error('Error importing web-vitals:', err);
    });
  }
};

export default reportWebVitals; 