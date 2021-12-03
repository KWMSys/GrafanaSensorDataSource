import React, { PureComponent } from 'react';
import { DataSourceHttpSettings } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { MyDataSourceOptions } from './types';

interface Props extends DataSourcePluginOptionsEditorProps<MyDataSourceOptions> {}

interface State {}

export class ConfigEditor extends PureComponent<Props, State> {
  render() {
    const { options, onOptionsChange } = this.props;

    return (
      <div className="gf-form-group">
        <DataSourceHttpSettings
          defaultUrl="http://localhost:9090"
          dataSourceConfig={options}
          showAccessOptions={true}
          onChange={onOptionsChange}
        />
      </div>
    );
  }
}
