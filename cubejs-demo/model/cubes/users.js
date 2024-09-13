cube(`users`, {
  sql_table: `public.users`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    value: {
      sql: `value`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    timestamp: {
      sql: `timestamp`,
      type: `string`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
