from django.apps import AppConfig

class baseConfig(AppConfig):
    name = 'base'

    def ready(self):
        import base.signals

