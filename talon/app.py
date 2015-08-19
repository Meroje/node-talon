import os, logging, sys, zerorpc, talon

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
handler = logging.StreamHandler(sys.stdout)
handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)

talon.init()

from talon import signature

class AppRPC(object):
    def signature(self, sender, message):
        logger.info('message from %s', sender)
        text, sig = signature.extract(message, sender)
        logger.info('extracted %s', sig)
        return sig

s = zerorpc.Server(AppRPC())
s.bind("tcp://0.0.0.0:"+os.environ['PORT'])
s.run()