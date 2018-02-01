import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Table } from 'antd';

import { MainLayout } from './../containers';

const Home = (props) => {
  const data = props.data || {};
  const { loading, allBars } = data;
  const bars = allBars || [];

  const columns = [{
    title: '',
    dataIndex: 'logo',
    key: 'logo',
  }, {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Typo',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
  }];

  const dataSource = bars.map((bar) => {
    const {
      logo, name, type, website,
    } = bar;
    const logoImg = logo ? <img src={`http://beraclub.com/${logo}`} alt={name} width={80} /> : null;
    return {
      logo: logoImg, name, type, website,
    };
  });

  return (
    <MainLayout>
      <div>
        { loading &&
          <p>Loading ..</p>
        }
        { allBars && allBars.length === 0 &&
          <p>Sem bares cadastrado</p>
        }
        { allBars && allBars.length &&
          <Table dataSource={dataSource} columns={columns} />
        }
      </div>
    </MainLayout>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    allBars: PropTypes.array,
    landing: PropTypes.bool,
  }),
};

Home.defaultProps = {
  data: {},
};

const Bars = gql`
  query Bars {
    allBars {
      id
      name
      type
      logo
      district
      website
    }
  }
`;

export default graphql(Bars)(Home);

