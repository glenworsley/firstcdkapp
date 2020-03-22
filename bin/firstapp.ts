#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FirstappStack } from '../lib/firstapp-stack';

const app = new cdk.App();
new FirstappStack(app, 'FirstappStack');
