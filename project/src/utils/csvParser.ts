export const parseCSVLine = (line: string): string[] => {
  const values: string[] = [];
  let currentValue = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      values.push(currentValue.replace(/^"|"$/g, ''));
      currentValue = '';
    } else {
      currentValue += char;
    }
  }
  values.push(currentValue.replace(/^"|"$/g, ''));
  return values;
};

export const parseCSVData = (csvContent: string) => {
  const lines = csvContent.trim().split('\n');
  const parsedData: Record<string, any[]> = {};

  lines.forEach(line => {
    const [
      symbol,
      date,
      open,
      high,
      low,
      close,
      change,
      changePercent,
      volume,
      turnover,
      pe,
      pb,
      deliveryPercent
    ] = parseCSVLine(line);

    if (!parsedData[symbol]) {
      parsedData[symbol] = [];
    }

    parsedData[symbol].push({
      date,
      open: parseFloat(open),
      high: parseFloat(high),
      low: parseFloat(low),
      close: parseFloat(close),
      change: parseFloat(change),
      changePercent: parseFloat(changePercent),
      volume: parseInt(volume),
      turnover: parseFloat(turnover),
      pe: parseFloat(pe),
      pb: parseFloat(pb),
      deliveryPercent: parseFloat(deliveryPercent)
    });
  });

  return Object.entries(parsedData).map(([symbol, data]) => ({
    symbol,
    dates: data.map(d => d.date),
    prices: {
      open: data.map(d => d.open),
      high: data.map(d => d.high),
      low: data.map(d => d.low),
      close: data.map(d => d.close)
    },
    metrics: {
      volume: data.map(d => d.volume),
      pe: data.map(d => d.pe),
      pb: data.map(d => d.pb),
      deliveryPercent: data.map(d => d.deliveryPercent)
    }
  }));
};