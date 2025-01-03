// packages/hooks/src/useAnalytics.tsx
// Provides analytics context with Mixpanel + optional Slack event notifications

import analytics from '@react-native-firebase/analytics';
import React, { createContext, useContext, useEffect } from 'react';
import mixpanel from 'react-native-mixpanel';

import config from '../../config/config';
import { makeRestRequest } from '../../lib/src/makeRestRequest';
import useUniqueDeviceID from './useUniqueDeviceID';

// Initialize Mixpanel with an optional project token from the config
mixpanel.init(config.mixpanelProjectToken ?? '');

export const useFirebaseAnalytics = () => {
  const logEvent = async (eventName: string, params?: object) => {
    await analytics().logEvent(eventName, params);
  };
  return { logEvent };
};

// Enumerate standard event types used in the app
export enum AppEventType {
  DoSomething = 'do_something',
  ShowSettings = 'show_settings',
}

interface AnalyticsInputProps {
  children: React.ReactNode;
}

interface AnalyticsReturnProps {
  trackEvent: (event: AppEventType, properties?: Record<string, any>) => void;
  notifySlackEvent: (event: AppEventType, properties?: Record<string, any>) => Promise<void>;
}

// Create a context to share analytics methods across the app
const AnalyticsContext = createContext<Partial<AnalyticsReturnProps>>({});

export const AnalyticsContextProvider = (props: AnalyticsInputProps): React.ReactElement => {
  const uniqueDeviceID = useUniqueDeviceID();

  // Identify the user in Mixpanel by device ID if available
  useEffect(() => {
    if (uniqueDeviceID !== undefined) {
      mixpanel.identify(uniqueDeviceID);
    }
  }, [uniqueDeviceID]);

  const trackEvent = (eventType: AppEventType, properties?: Record<string, any>): void => {
    const propsWithDistinctId = { ...properties, distinct_id: uniqueDeviceID };
    mixpanel.track(eventType, propsWithDistinctId);
  };

  // Example: a Slack webhook or remote logging
  const notifySlackEvent = async (
    eventType: AppEventType,
    properties?: Record<string, any>,
  ): Promise<void> => {
    await makeRestRequest('POST', `events/${eventType}`, properties);
  };

  const analyticsContext: AnalyticsReturnProps = {
    trackEvent,
    notifySlackEvent,
  };

  return (
    <AnalyticsContext.Provider value={analyticsContext}>{props.children}</AnalyticsContext.Provider>
  );
};

export const { Consumer: AnalyticsContextConsumer } = AnalyticsContext;

export const useAnalyticsContext = (): Partial<AnalyticsReturnProps> =>
  useContext(AnalyticsContext);
